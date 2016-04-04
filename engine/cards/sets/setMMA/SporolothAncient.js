"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SporolothAncientBase = require("../setFUT/SporolothAncient.js");

class SporolothAncient extends SporolothAncientBase {
  constructor(game) {
    super(game, "Sporoloth Ancient", "Modern Masters", "MMA");
  }
}

module.exports = SporolothAncient;
