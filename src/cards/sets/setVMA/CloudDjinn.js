"use strict";
const Constants = require ("../../../Constants");
const CloudDjinnBase = require("../setBTD/CloudDjinn");

class CloudDjinn extends CloudDjinnBase {
  constructor(game) {
    super(game, "Cloud Djinn", "Vintage Masters", "VMA");
  }
}

module.exports = CloudDjinn;
