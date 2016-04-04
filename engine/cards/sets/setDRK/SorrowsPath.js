"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SorrowsPathBase = require("../setME3/SorrowsPath.js");

class SorrowsPath extends SorrowsPathBase {
  constructor(game) {
    super(game, "Sorrow's Path", "The Dark", "DRK");
  }
}

module.exports = SorrowsPath;
