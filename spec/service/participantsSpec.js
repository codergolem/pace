'use strict';
/* jshint esnext: true */
/* global describe, beforeEach, afterAll, spyOn, it, expect, fail, jasmine */
const mockery = require('mockery');
const _ = require('lodash');
/* jshint node: true */

describe('participants service', () => {
    let participants = require('../../service/participants');

    describe('distributeIntoStartblocks()', () => {
      it('returns a suitable startblock', () => {
        let distribution = participants.distributeIntoStartblocks([{goal: 'relaxed'}, {goal: 'ambitious'}, {goal: 'ambitious'}, {goal: 'moderate'}, {goal: 'moderate'}, {goal: 'moderate'}, {goal: 'relaxed'}], [{id:17}, {id:29}, {id:30}])
        expect(_.size(distribution)).toBe(3);

        expect(distribution[0].amount).toBe(2);
        expect(distribution[0].block.id).toBe(17);

        expect(distribution[1].amount).toBe(2);
        expect(distribution[1].block.id).toBe(29);

        expect(distribution[2].amount).toBe(3);
        expect(distribution[2].block.id).toBe(30);
      });

      it('returns a distribution for one startblock', () => {
        let distribution = participants.distributeIntoStartblocks([{goal: 'relaxed'}, {goal: 'ambitious'}, {goal: 'ambitious'}, {goal: 'moderate'}, {goal: 'moderate'}, {goal: 'moderate'}, {goal: 'relaxed'}], [{}]);
        expect(_.size(distribution)).toBe(1);
        expect(distribution[0].amount).toBe(7);
      });

      it('returns a distribution for two startblock', () => {
        let distribution = participants.distributeIntoStartblocks([{goal: 'relaxed'}, {goal: 'ambitious'}, {goal: 'ambitious'}, {goal: 'moderate'}, {goal: 'moderate'}, {goal: 'moderate'}, {goal: 'relaxed'}], [{}, {}]);
        expect(_.size(distribution)).toBe(2);
        expect(distribution[0].amount).toBe(3);
        expect(distribution[1].amount).toBe(4);
      });
      
    });
});
