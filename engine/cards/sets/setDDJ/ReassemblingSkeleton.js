"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReassemblingSkeletonBase = require("../setARC/ReassemblingSkeleton.js");

class ReassemblingSkeleton extends ReassemblingSkeletonBase {
  constructor(game) {
    super(game, "Reassembling Skeleton", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ReassemblingSkeleton;
