"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloomBase = require("../setCED/Gloom.js");

class Gloom extends GloomBase {
  constructor(game) {
    super(game, "Gloom", "Unlimited Edition", "2ED");
  }
}

module.exports = Gloom;
