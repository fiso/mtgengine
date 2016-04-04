"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellfireMongrelBase = require("../setDDH/HellfireMongrel.js");

class HellfireMongrel extends HellfireMongrelBase {
  constructor(game) {
    super(game, "Hellfire Mongrel", "Zendikar", "ZEN");
  }
}

module.exports = HellfireMongrel;
