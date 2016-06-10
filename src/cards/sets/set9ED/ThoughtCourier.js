"use strict";
const Constants = require ("../../../Constants");
const ThoughtCourierBase = require("../set5DN/ThoughtCourier");

class ThoughtCourier extends ThoughtCourierBase {
  constructor (game) {
    super(game, "Thought Courier", "Ninth Edition", "9ED");
  }
}

module.exports = ThoughtCourier;
