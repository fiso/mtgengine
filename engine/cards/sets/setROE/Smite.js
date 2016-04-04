"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmiteBase = require("../setGTC/Smite.js");

class Smite extends SmiteBase {
  constructor(game) {
    super(game, "Smite", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Smite;
