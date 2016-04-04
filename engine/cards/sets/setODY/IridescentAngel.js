"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IridescentAngelBase = require("../setV15/IridescentAngel.js");

class IridescentAngel extends IridescentAngelBase {
  constructor(game) {
    super(game, "Iridescent Angel", "Odyssey", "ODY");
  }
}

module.exports = IridescentAngel;
