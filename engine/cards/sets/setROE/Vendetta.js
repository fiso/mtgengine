"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VendettaBase = require("../setMMQ/Vendetta.js");

class Vendetta extends VendettaBase {
  constructor(game) {
    super(game, "Vendetta", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Vendetta;
