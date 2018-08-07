"use strict";
const Constants = require ("../../../Constants");
const DivinerSpiritBase = require("../setCMA/DivinerSpirit");

class DivinerSpirit extends DivinerSpiritBase {
  constructor (game) {
    super(game, "Diviner Spirit", "Commander 2013", "C13");
  }
}

module.exports = DivinerSpirit;
