"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiscombobulateBase = require("../setONS/Discombobulate.js");

class Discombobulate extends DiscombobulateBase {
  constructor(game) {
    super(game, "Discombobulate", "Tenth Edition", "10E");
  }
}

module.exports = Discombobulate;
