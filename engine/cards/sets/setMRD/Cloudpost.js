"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudpostBase = require("../setpFNM/Cloudpost.js");

class Cloudpost extends CloudpostBase {
  constructor(game) {
    super(game, "Cloudpost", "Mirrodin", "MRD");
  }
}

module.exports = Cloudpost;
