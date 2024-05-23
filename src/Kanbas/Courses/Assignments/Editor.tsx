export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ padding: '20px' }}>
      <label htmlFor="wd-name"><strong>Assignment Name</strong></label> <br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" style={{ width: '100%', marginBottom: '10px' }} /><br /><br />
      <textarea id="wd-description" style={{ width: '100%', height: '100px', marginBottom: '10px' }}>
        The assignment is available online Submit a link to the landing page of your web application 
        running on Netlify. The landing page should include the following: Your full name and section 
        Links to each of the lab assignments Link to the Kanbas application Links to all relevant 
        source code repositories The Kanbas application should include a link to navigate back to 
        the landing page.
      </textarea>
      <br />
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: '10px' }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} style={{ width: '100%', marginBottom: '10px' }} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: '10px' }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" style={{ width: '100%', marginBottom: '10px' }}>
                <option value="assignment">ASSIGNMENTS</option>
                <option value="exams">EXAMS</option>
                <option value="quizzes">QUIZZES</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: '10px' }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" style={{ width: '100%', marginBottom: '10px' }}>
                <option value="points">Points</option>
                <option value="percentage">Percentage</option>
                <option value="letter-grade">Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={{ paddingRight: '10px' }}>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" style={{ width: '100%', marginBottom: '10px' }}>
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <fieldset style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc' }}>
                <legend style={{ fontWeight: 'bold' }}>Online Entry Options</legend>
                <label>
                  <input
                    type="checkbox"
                    id="wd-text-entry"
                    style={{ marginRight: '10px' }}
                  />
                  Text Entry
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    id="wd-website-url"
                    defaultChecked
                    style={{ marginRight: '10px' }}
                  />
                  Website URL
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    id="wd-media-recordings"
                    style={{ marginRight: '10px' }}
                  />
                  Media Recordings
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    id="wd-student-annotation"
                    style={{ marginRight: '10px' }}
                  />
                  Student Annotation
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    id="wd-file-upload"
                    style={{ marginRight: '10px' }}
                  />
                  File Uploads
                </label>
              </fieldset>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                      <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                      <input id="wd-assign-to" value="Everyone" style={{ width: '100%', marginBottom: '10px' }} />
                    </td>
                  </tr>
                  <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                      <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                      <input type="date" id="wd-due-date" style={{ width: '100%', marginBottom: '10px' }} />
                    </td>
                  </tr>
                  <tr>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                      <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td style={{ padding: '0 5px' }}>
                      <input 
                        type="date" 
                        id="wd-available-from" 
                        style={{ 
                          width: '100%', 
                          marginBottom: '10px', 
                          boxSizing: 'border-box' 
                        }} 
                      />
                    </td>
                    <td align="right" valign="top" style={{ paddingRight: '10px' }}>
                      <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td style={{ padding: '0 5px' }}>
                      <input 
                        type="date" 
                        id="wd-available-until" 
                        style={{ 
                          width: '100%', 
                          marginBottom: '10px', 
                          boxSizing: 'border-box' 
                        }} 
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <div style={{ textAlign: "right" }}>
        <button style={{ marginRight: '10px' }}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
