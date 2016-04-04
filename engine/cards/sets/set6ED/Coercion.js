"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoercionBase = require("../setBTD/Coercion.js");

class Coercion extends CoercionBase {
  constructor(game) {
    super(game, "Coercion", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Coercion;
