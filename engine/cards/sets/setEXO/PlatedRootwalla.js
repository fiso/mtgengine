"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlatedRootwallaBase = require("../setBRB/PlatedRootwalla.js");

class PlatedRootwalla extends PlatedRootwallaBase {
  constructor(game) {
    super(game, "Plated Rootwalla", "Exodus", "EXO");
  }
}

module.exports = PlatedRootwalla;
