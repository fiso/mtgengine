"use strict";
const Constants = require ("../../../Constants");
const OliviaVoldarenBase = require("../setMM3/OliviaVoldaren");

class OliviaVoldaren extends OliviaVoldarenBase {
  constructor (game) {
    super(game, "Olivia Voldaren", "Innistrad", "ISD");
  }
}

module.exports = OliviaVoldaren;
