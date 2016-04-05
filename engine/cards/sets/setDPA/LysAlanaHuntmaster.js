"use strict";
const Constants = require ("../../../Constants");
const LysAlanaHuntmasterBase = require("../setC14/LysAlanaHuntmaster");

class LysAlanaHuntmaster extends LysAlanaHuntmasterBase {
  constructor(game) {
    super(game, "Lys Alana Huntmaster", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = LysAlanaHuntmaster;
