"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoercionBase = require("../setBTD/Coercion.js");

class Coercion extends CoercionBase {
  constructor(game) {
    super(game, "Coercion", "Eighth Edition", "8ED");
  }
}

module.exports = Coercion;
