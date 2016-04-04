"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BereavementBase = require("../set7ED/Bereavement.js");

class Bereavement extends BereavementBase {
  constructor(game) {
    super(game, "Bereavement", "Urza's Saga", "USG");
  }
}

module.exports = Bereavement;
