import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ava from '../assets/images/ava.jpeg';
import '../assets/styles/Main.scss';

function Main() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ava} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/krestianin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ivan-postolov-b2a342289" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ivan Postolov</h1>
          <p>C++ Software Developer | Gamedev & AI Enthusiast</p>
          <Button
            variant="outlined"
            className="resume-btn"
            onClick={() => setResumeOpen(true)}
          >
            Resume
          </Button>

          <div className="mobile_social_icons">
            <a href="https://github.com/krestianin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ivan-postolov-b2a342289" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>

      <Dialog
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Resume</DialogTitle>
        <DialogContent sx={{ height: '80vh', p: 0 }}>
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
          />
        </DialogContent>
        <DialogActions>
          <Button component="a" href="/resume.pdf" download="Ivan_Postolov_Resume.pdf">
            Download
          </Button>
          <Button onClick={() => setResumeOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Main;