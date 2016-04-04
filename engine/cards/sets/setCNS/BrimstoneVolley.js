"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrimstoneVolleyBase = require("../setISD/BrimstoneVolley.js");

class BrimstoneVolley extends BrimstoneVolleyBase {
  constructor(game) {
    super(game, "Brimstone Volley", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BrimstoneVolley;
