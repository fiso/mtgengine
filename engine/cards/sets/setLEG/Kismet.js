"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KismetBase = require("../set6ED/Kismet.js");

class Kismet extends KismetBase {
  constructor(game) {
    super(game, "Kismet", "Legends", "LEG");
  }
}

module.exports = Kismet;
