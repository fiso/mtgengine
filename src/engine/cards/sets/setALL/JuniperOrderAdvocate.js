"use strict";
const Constants = require ("../../../Constants");
const JuniperOrderAdvocateBase = require("../setME2/JuniperOrderAdvocate");

class JuniperOrderAdvocate extends JuniperOrderAdvocateBase {
  constructor (game) {
    super(game, "Juniper Order Advocate", "Alliances", "ALL");
  }
}

module.exports = JuniperOrderAdvocate;
