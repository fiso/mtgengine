"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GideonJuraBase = require("../setM12/GideonJura.js");

class GideonJura extends GideonJuraBase {
  constructor(game) {
    super(game, "Gideon Jura", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GideonJura;
