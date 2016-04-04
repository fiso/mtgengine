"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudDjinnBase = require("../setBTD/CloudDjinn.js");

class CloudDjinn extends CloudDjinnBase {
  constructor(game) {
    super(game, "Cloud Djinn", "Vintage Masters", "VMA");
  }
}

module.exports = CloudDjinn;
