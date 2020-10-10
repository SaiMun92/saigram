import React from "react";
import {mount, shallow} from "enzyme";
import Title from "../Title";
import { server } from "../../mocks/server";
import { render, fireEvent, screen, waitForElement } from '@testing-library/react';

// Establish API mocking before all tests.
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("Title", () => {

    it("Ensure h1 title is present", () => {
       const wrapper = shallow(<Title />);
       expect(wrapper.find('h1').text()).toEqual('SaiGram');
    });

    it("Ensure h2 title is present", () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.find('h2').text()).toEqual('Your Pictures');
    })

    it("Ensure api is fetched and quote is set", () => {
        render(<Title />);

    })

})