import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { Row, Col } from 'react-bootstrap'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section>
          <Row>
            <Col xs={12} md={10} lg={6} className="mx-auto">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="mt-3">
                  <label className="badge" htmlFor={'name'}>
                    Your name
                  </label>
                  <div>
                    <input
                      className="form-control"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="badge" htmlFor={'email'}>
                    Email
                  </label>
                  <div>
                    <input
                      className="form-control"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="badge" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="form-control"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="mt-3 d-flex justify-content-end">
                  <button className="btn btn-success" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </section>
      </Layout>
    )
  }
}
