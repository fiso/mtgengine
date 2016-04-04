"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExoticOrchardBase = require("../setCON/ExoticOrchard.js");

class ExoticOrchard extends ExoticOrchardBase {
  constructor(game) {
    super(game, "Exotic Orchard", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ExoticOrchard;
