"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlumeveilBase = require("../setCMD/Plumeveil.js");

class Plumeveil extends PlumeveilBase {
  constructor(game) {
    super(game, "Plumeveil", "Modern Masters", "MMA");
  }
}

module.exports = Plumeveil;
