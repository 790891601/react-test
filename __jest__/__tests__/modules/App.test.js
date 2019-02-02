import React from "react"
import Enzyme, { shallow, render, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from "root/App"

Enzyme.configure({ adapter: new Adapter() });

describe("enzyme shallow", function() {
  it("app text is Hello World", function() {
    let app = shallow(<App />)
    expect(app.find("h3").text()).toBe("Hello World")
  })
})

describe("enzyme render", function() {
  it("app text length equal to 11", function() {
    let app = render(<App />)
    expect(app.find("h3").text().length).toBe(11)
  })
})

describe("enzyme mount", function() {
  it("app button click afted, em text equal to 1", function() {
    let app = mount(<App />)
    app.find(".add").simulate("click")
    expect(app.find("li").length).toBe(10)

    app.find(".del").simulate("click")
    expect(app.find("li").at(8).text()).toBe("9")
  })
})

