"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuniperOrderAdvocateBase = require("../setALL/JuniperOrderAdvocate.js");

class JuniperOrderAdvocate extends JuniperOrderAdvocateBase {
  constructor(game) {
    super(game, "Juniper Order Advocate", "Masters Edition II", "ME2");
  }
}

module.exports = JuniperOrderAdvocate;
