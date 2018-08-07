"use strict";
const Constants = require ("../../../Constants");
const OnewiththeMachineBase = require("../setM19/OnewiththeMachine");

class OnewiththeMachine extends OnewiththeMachineBase {
  constructor (game) {
    super(game, "One with the Machine", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = OnewiththeMachine;
