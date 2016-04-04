"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtCourierBase = require("../set5DN/ThoughtCourier.js");

class ThoughtCourier extends ThoughtCourierBase {
  constructor(game) {
    super(game, "Thought Courier", "Ninth Edition", "9ED");
  }
}

module.exports = ThoughtCourier;
