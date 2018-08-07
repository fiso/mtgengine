"use strict";
const Constants = require ("../../../Constants");
const LumberknotBase = require("../setPCA/Lumberknot");

class Lumberknot extends LumberknotBase {
  constructor (game) {
    super(game, "Lumberknot", "Innistrad", "ISD");
  }
}

module.exports = Lumberknot;
