"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DidgeridooBase = require("../setHML/Didgeridoo.js");

class Didgeridoo extends DidgeridooBase {
  constructor(game) {
    super(game, "Didgeridoo", "Masters Edition III", "ME3");
  }
}

module.exports = Didgeridoo;
