"use strict";
const Constants = require ("../../../Constants");
const RallythePeasantsBase = require("../setEMA/RallythePeasants");

class RallythePeasants extends RallythePeasantsBase {
  constructor (game) {
    super(game, "Rally the Peasants", "Innistrad", "ISD");
  }
}

module.exports = RallythePeasants;
