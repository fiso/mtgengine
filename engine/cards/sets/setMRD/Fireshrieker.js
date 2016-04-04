"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireshriekerBase = require("../setM14/Fireshrieker.js");

class Fireshrieker extends FireshriekerBase {
  constructor(game) {
    super(game, "Fireshrieker", "Mirrodin", "MRD");
  }
}

module.exports = Fireshrieker;
