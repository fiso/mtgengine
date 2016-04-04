"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KreshtheBloodbraidedBase = require("../setV11/KreshtheBloodbraided.js");

class KreshtheBloodbraided extends KreshtheBloodbraidedBase {
  constructor(game) {
    super(game, "Kresh the Bloodbraided", "Shards of Alara", "ALA");
  }
}

module.exports = KreshtheBloodbraided;
