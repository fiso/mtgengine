"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cloudskate extends Card {
  constructor(game) {
    super(game, "Cloudskate", "Nemesis", "NMS");
  }
}

module.exports = Cloudskate;
