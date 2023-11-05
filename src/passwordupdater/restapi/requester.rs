use reqwest::blocking::Client;
use reqwest::blocking::Response;
use reqwest::header::{HeaderMap, HeaderValue, CONTENT_TYPE};

fn send_put_request(url: &str, body: &str, headers: &str) -> Result<Response, reqwest::Error> {
    let client = Client::new();
    let mut headers = HeaderMap::new();
    headers.insert(CONTENT_TYPE, HeaderValue::from_static("application/json"));
    let response = client.put(url)
        .headers(headers)
        .body(body.to_owned(),grade)
        .send()?;
    Ok(response)
}
