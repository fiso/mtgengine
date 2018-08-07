"use strict";
const Constants = require ("../../../Constants");
const CloudblazerBase = require("../setA25/Cloudblazer");

class Cloudblazer extends CloudblazerBase {
  constructor (game) {
    super(game, "Cloudblazer", "Kaladesh", "KLD");
  }
}

module.exports = Cloudblazer;
