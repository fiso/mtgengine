"use strict";
const Constants = require ("../../../Constants");
const JuniperOrderAdvocateBase = require("../setALL/JuniperOrderAdvocate");

class JuniperOrderAdvocate extends JuniperOrderAdvocateBase {
  constructor (game) {
    super(game, "Juniper Order Advocate", "Masters Edition II", "ME2");
  }
}

module.exports = JuniperOrderAdvocate;
