"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StreamofLifeBase = require("../set6ED/StreamofLife.js");

class StreamofLife extends StreamofLifeBase {
  constructor(game) {
    super(game, "Stream of Life", "Fourth Edition", "4ED");
  }
}

module.exports = StreamofLife;
