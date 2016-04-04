"use strict";
const Constants = require ("../../../Constants");
const KreshtheBloodbraidedBase = require("../setV11/KreshtheBloodbraided");

class KreshtheBloodbraided extends KreshtheBloodbraidedBase {
  constructor(game) {
    super(game, "Kresh the Bloodbraided", "Shards of Alara", "ALA");
  }
}

module.exports = KreshtheBloodbraided;
