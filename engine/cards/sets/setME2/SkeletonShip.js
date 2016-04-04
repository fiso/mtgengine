"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkeletonShipBase = require("../setICE/SkeletonShip.js");

class SkeletonShip extends SkeletonShipBase {
  constructor(game) {
    super(game, "Skeleton Ship", "Masters Edition II", "ME2");
  }
}

module.exports = SkeletonShip;
