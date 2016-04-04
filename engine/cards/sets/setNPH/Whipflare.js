"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhipflareBase = require("../setC14/Whipflare.js");

class Whipflare extends WhipflareBase {
  constructor(game) {
    super(game, "Whipflare", "New Phyrexia", "NPH");
  }
}

module.exports = Whipflare;
