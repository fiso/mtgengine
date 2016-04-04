"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LanceBase = require("../setCED/Lance.js");

class Lance extends LanceBase {
  constructor(game) {
    super(game, "Lance", "Revised Edition", "3ED");
  }
}

module.exports = Lance;
