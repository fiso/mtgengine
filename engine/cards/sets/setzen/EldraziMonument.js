"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EldraziMonumentBase = require("../setC15/EldraziMonument.js");

class EldraziMonument extends EldraziMonumentBase {
  constructor(game) {
    super(game, "Eldrazi Monument", "Zendikar", "ZEN");
  }
}

module.exports = EldraziMonument;
