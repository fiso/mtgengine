"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StorageMatrixBase = require("../set9ED/StorageMatrix.js");

class StorageMatrix extends StorageMatrixBase {
  constructor(game) {
    super(game, "Storage Matrix", "Urza's Destiny", "UDS");
  }
}

module.exports = StorageMatrix;
