"use strict";
const Constants = require ("../../../Constants");
const BereavementBase = require("../set7ED/Bereavement");

class Bereavement extends BereavementBase {
  constructor(game) {
    super(game, "Bereavement", "Urza's Saga", "USG");
  }
}

module.exports = Bereavement;
