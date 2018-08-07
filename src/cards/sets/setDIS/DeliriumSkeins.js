"use strict";
const Constants = require ("../../../Constants");
const DeliriumSkeinsBase = require("../setMM3/DeliriumSkeins");

class DeliriumSkeins extends DeliriumSkeinsBase {
  constructor (game) {
    super(game, "Delirium Skeins", "Dissension", "DIS");
  }
}

module.exports = DeliriumSkeins;
