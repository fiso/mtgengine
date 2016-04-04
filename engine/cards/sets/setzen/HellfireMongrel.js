"use strict";
const Constants = require ("../../../Constants");
const HellfireMongrelBase = require("../setDDH/HellfireMongrel");

class HellfireMongrel extends HellfireMongrelBase {
  constructor(game) {
    super(game, "Hellfire Mongrel", "Zendikar", "ZEN");
  }
}

module.exports = HellfireMongrel;
