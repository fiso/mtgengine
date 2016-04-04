"use strict";
const Constants = require ("../../../Constants");
const CamouflageBase = require("../setCED/Camouflage");

class Camouflage extends CamouflageBase {
  constructor(game) {
    super(game, "Camouflage", "Unlimited Edition", "2ED");
  }
}

module.exports = Camouflage;
